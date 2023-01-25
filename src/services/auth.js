import bcrypt from "bcryptjs/dist/bcrypt";


export const createPasswordHash = async (password) => {
    return bcrypt.hash(password, 8);
};

export const checkPassword1 = (user,password)=> {
    return bcrypt.compare(password, user.password_hash);
};


