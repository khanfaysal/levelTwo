import { HydratedDocument, Model } from "mongoose";

export interface IUser {
    id: string;
    role: 'student';
    password: string;
    name: {
        firstName: string;
        middleName?: string;
        lastName: string;
    };
    dataOfBirth?: string;
    gender: 'male' | 'female';
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
}


// custom instance method interface
export interface IUserMethods {
    fullName(): string;
  }

  // static method
export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
  }