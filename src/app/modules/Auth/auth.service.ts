import { UserRole, UserStatus } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { Secret } from "jsonwebtoken";
import { prisma } from "../../../shared/prisma";
import { jwtHelpers } from "../../../helpars/jwtHelpers";
import config from "../../config";


const registerUser = async (payload: {
	gstApplicationId: string;
	password: string;
	unit?: string;
	faculty?: string;
	role?: UserRole;   
}) => {

	const defaultUnit = "all";
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
	const userData = await prisma.user.findUniqueOrThrow({
		where: {
			gstApplicationId: payload.gstApplicationId,
			status: UserStatus.ACTIVE,
		},
	});

	const isCorrectPassword: boolean = await bcrypt.compare(
		payload.password,
		userData.password
	);

	if (!isCorrectPassword) throw new Error("Password is incorrect!");

	const accessToken = jwtHelpers.generateToken(
		{
			gstApplicationId: userData.gstApplicationId,
			role: userData.role,
		},
		config.jwt.jwt_secret as Secret,
		config.jwt.expires_in as string
	);

	const refreshToken = jwtHelpers.generateToken(
		{
			gstApplicationId: userData.gstApplicationId,
			role: userData.role,
		},
		config.jwt.refresh_token_secret as Secret,
		config.jwt.refresh_token_expires_in as string
	);

	return {
		accessToken,
		refreshToken,
	};
};





const refreshToken = async (token: string) => {
	let decodedData: any;

	try {
		decodedData = jwtHelpers.verifyToken(
			token,
			config.jwt.refresh_token_secret as Secret
		);
	} catch (err) {
		throw new Error("You are not authorized!");
	}

	
	const userData = await prisma.user.findUniqueOrThrow({
		where: {
			gstApplicationId: decodedData.gstApplicationId,
			status: UserStatus.ACTIVE,
		},
	});

	const accessToken = jwtHelpers.generateToken(
		{
			gstApplicationId: userData.gstApplicationId,
			role: userData.role,
		},
		config.jwt.jwt_secret as Secret,
		config.jwt.expires_in as string
	);

	const newRefreshToken = jwtHelpers.generateToken(
		{
			gstApplicationId: userData.gstApplicationId,
			role: userData.role,
		},
		config.jwt.refresh_token_secret as Secret,
		config.jwt.refresh_token_expires_in as string
	);

	return {
		accessToken,
		refreshToken: newRefreshToken,
	};
};







export const AuthServices = {
	loginUser,
	refreshToken,
	registerUser
};
