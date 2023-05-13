import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserDB = async(payload: IUser): Promise<IUser> => {

    const user = await new User(payload)  //note: User -> class, user->instance and save-> method
      await user.save(); //built in instance methods
      console.log(user.fullName()); //custom instance method
      return user;
}

// all data find
export const getUsersFromDB = async():Promise<IUser[]> => {
    const users = await User.find();
    return users;
}

// single data find

export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({id: payload}, {name: 1, password: 1, email: 1, contactNo: 1});
    return user;
}

export const getAdminUsersFromDB = async () => {
    const admins = await User.getAdminUsers();
    console.log(admins)
    return admins;
}

