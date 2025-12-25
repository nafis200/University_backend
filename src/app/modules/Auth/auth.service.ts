import { UserRole, UserStatus } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { Secret } from "jsonwebtoken";

import { jwtHelpers } from "../../../helpars/jwtHelpers";
import config from "../../config";
import prisma from "../../../shared/prisma";
import ApiError from "../../errors/ApiError";

const registerUser = async (payload: {
  gstApplicationId: string;
  password: string;
  unit?: string;
  faculty?: string;
  role?: UserRole;   
}) => {

   const existingUser = await prisma.user.findUnique({
    where: { gstApplicationId: payload.gstApplicationId },
  });

  if (existingUser) {
    throw new ApiError(404,"User with this GST Application ID already exists");
  }
  const defaultUnit = "A";
  const finalUnit = payload.unit || defaultUnit;
  const finalRole = payload.role || UserRole.STUDENTS;
  const hashedPassword = await bcrypt.hash(payload.password, 10);

  const newUser = await prisma.user.create({
    data: {
      gstApplicationId: payload.gstApplicationId,
      password: hashedPassword,
      unit: finalUnit,
      faculty: payload.faculty || null,
      status: UserStatus.ACTIVE,
      role: finalRole,
    },
  });

  return {
    message: "User registered successfully!",
    userId: newUser.gstApplicationId,
  };
};

const loginUser = async (payload: { gstApplicationId: string; password: string }) => {
  console.log(payload)
  const userData = await prisma.user.findUniqueOrThrow({
    where: { gstApplicationId: payload.gstApplicationId },
  });


  if (userData.status !== UserStatus.ACTIVE) {
    throw new ApiError(500,`User is ${userData.status.toLowerCase()} and cannot login.`);
  }

  const isCorrectPassword: boolean = await bcrypt.compare(
    payload.password,
    userData.password
  );

  if (!isCorrectPassword) throw new Error("Password is incorrect!");

  const accessToken = jwtHelpers.generateToken(
    { gstApplicationId: userData.gstApplicationId, role: userData.role, unit: userData.unit },
    config.jwt.jwt_secret as Secret,
    config.jwt.expires_in as string
  );

  const refreshToken = jwtHelpers.generateToken(
    { gstApplicationId: userData.gstApplicationId, role: userData.role, unit: userData.unit },
    config.jwt.refresh_token_secret as Secret,
    config.jwt.refresh_token_expires_in as string
  );

  return { accessToken, refreshToken };
};

const refreshToken = async (token: string) => {
  let decodedData: any;
  try {
    decodedData = jwtHelpers.verifyToken(token, config.jwt.refresh_token_secret as Secret);
  } catch (err) {
    throw new ApiError(500,"You are not authorized!");
  }

  const userData = await prisma.user.findUniqueOrThrow({
    where: { gstApplicationId: decodedData.gstApplicationId },
  });

  if (userData.status !== UserStatus.ACTIVE) {
    throw new Error(`User is ${userData.status.toLowerCase()} and cannot refresh token.`);
  }

  const accessToken = jwtHelpers.generateToken(
    { gstApplicationId: userData.gstApplicationId, role: userData.role, unit: userData.unit },
    config.jwt.jwt_secret as Secret,
    config.jwt.expires_in as string
  );

  const newRefreshToken = jwtHelpers.generateToken(
    { gstApplicationId: userData.gstApplicationId, role: userData.role },
    config.jwt.refresh_token_secret as Secret,
    config.jwt.refresh_token_expires_in as string
  );

  return { accessToken, refreshToken: newRefreshToken };
};

const toggleUserStatus = async (gstApplicationId: string) => {
  const user = await prisma.user.findUniqueOrThrow({ where: { gstApplicationId } });

  const newStatus =
    user.status === UserStatus.ACTIVE ? UserStatus.BLOCKED : UserStatus.ACTIVE;

  const updatedUser = await prisma.user.update({
    where: { gstApplicationId },
    data: { status: newStatus },
  });

  return {
    message: `User status updated successfully!`,
    gstApplicationId: updatedUser.gstApplicationId,
    status: updatedUser.status,
  };
};

export const AuthServices = {
  loginUser,
  refreshToken,
  registerUser,
  toggleUserStatus,
};
