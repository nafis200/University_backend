-- ===============================
-- Table: GSTApplicantInformation
-- ===============================
CREATE TABLE GSTApplicantInformation (
    GSTApplicationId BIGINT PRIMARY KEY,
    GSTRoll VARCHAR(20),
    Unit VARCHAR(10),
    Merit INT
);

-- ===============================
-- Table: Addresses
-- ===============================
CREATE TABLE Addresses (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    GSTApplicationId BIGINT,
    Village VARCHAR(255),
    PostOffice VARCHAR(100),
    PostCode VARCHAR(20),
    Thana VARCHAR(100),
    District VARCHAR(100),
    Country VARCHAR(100),
    NID VARCHAR(50),
    PresentAddress VARCHAR(255),
    FOREIGN KEY (GSTApplicationId) REFERENCES GSTApplicantInformation(GSTApplicationId)
);

-- ===============================
-- Table: ApplicantPictures
-- ===============================
CREATE TABLE ApplicantPictures (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    GSTApplicationId BIGINT,
    ApplicantPicture VARCHAR(255),
    FOREIGN KEY (GSTApplicationId) REFERENCES GSTApplicantInformation(GSTApplicationId)
);

-- ===============================
-- Table: DeanOfficeClearence
-- ===============================
CREATE TABLE DeanOfficeClearence (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    GSTApplicationId BIGINT,
    ClearenceTime DATETIME NULL,
    ClearenceStatus VARCHAR(50),
    PendingSubmissionTime DATETIME NULL,
    FOREIGN KEY (GSTApplicationId) REFERENCES GSTApplicantInformation(GSTApplicationId)
);

-- ===============================
-- Table: DepartmentStatus
-- ===============================
CREATE TABLE DepartmentStatus (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    DepartmentName VARCHAR(150),
    TotalSeat INT
);

-- ===============================
-- Table: EducationalInfo
-- ===============================
CREATE TABLE EducationalInfo (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    GSTApplicationId BIGINT,
    HSCRoll VARCHAR(20),
    HSCYear INT,
    HSCBoard VARCHAR(50),
    SSCRoll VARCHAR(20),
    SSCYear INT,
    SSCBoard VARCHAR(50),
    HSCGpa DECIMAL(3,2),
    HSCSubject VARCHAR(50),
    SSCGpa DECIMAL(3,2),
    SSCSubject VARCHAR(50),
    SSCInstitution VARCHAR(255),
    HSCInstitution VARCHAR(255),
    FOREIGN KEY (GSTApplicationId) REFERENCES GSTApplicantInformation(GSTApplicationId)
);

-- ===============================
-- Table: FinalAdmit
-- ===============================
CREATE TABLE FinalAdmit (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    GSTApplicationId BIGINT,
    FinalClearenceStatus VARCHAR(50),
    FinalAdmitTime DATETIME,
    FOREIGN KEY (GSTApplicationId) REFERENCES GSTApplicantInformation(GSTApplicationId)
);

-- ===============================
-- Table: GuardianInfo
-- ===============================
CREATE TABLE GuardianInfo (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    GSTApplicationId BIGINT,
    GuardianName VARCHAR(100),
    GuardianOccupation VARCHAR(100),
    GuardianMonthlyIncome VARCHAR(50),
    GuardianRelation VARCHAR(50),
    GuardianVillage VARCHAR(255),
    GuardianPostOffice VARCHAR(100),
    GuardianPostCode VARCHAR(20),
    GuardianThana VARCHAR(100),
    GuardianDistrict VARCHAR(100),
    GuardianCountry VARCHAR(100),
    GuardianNID VARCHAR(50),
    GuardianPhone VARCHAR(20),
    FOREIGN KEY (GSTApplicationId) REFERENCES GSTApplicantInformation(GSTApplicationId)
);

-- ===============================
-- Table: Login
-- ===============================
CREATE TABLE Login (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Email VARCHAR(100),
    Password VARCHAR(100),
    UnitName VARCHAR(10),
    Role VARCHAR(50),
    Faculty VARCHAR(100) NULL,
    isDeleted BIT DEFAULT 0
);

-- ===============================
-- Table: student_photos
-- ===============================
CREATE TABLE student_photos (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    applicant_id BIGINT,
    NAME VARCHAR(100),
    admission_roll VARCHAR(20),
    unit VARCHAR(10),
    photo VARCHAR(255),
    selfie VARCHAR(255)
);














