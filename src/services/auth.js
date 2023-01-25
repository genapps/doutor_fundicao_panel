import bcrypt from "bcryptjs/dist/bcrypt";


export const createPasswordHash = async (password) => {
    return bcrypt.hash(password, 8);
};

export const checkPassword1 = (user,password)=> {
    return bcrypt.compare(password, user.password_hash);
};

export const hasAdminPermission = (currentUser) => {
    return currentUser && currentUser.role === "admin";
};

export const hasManagerPermission = (currentUser) => {
    return currentUser && ["admin", "monager"].includes(currentUser.role);
};

