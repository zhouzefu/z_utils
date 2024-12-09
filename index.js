/**
 * 是否邮箱
 * @param {string} email 
 * @returns 
 */
export function isEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * 是否手机号
 * @param {string} phone 
 * @returns 
 */
export function isPhone(phone) {
    return /^1[3-9]\d{9}$/.test(phone);
}