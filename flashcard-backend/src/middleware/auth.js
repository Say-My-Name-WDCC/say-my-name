import jwt from 'jsonwebtoken'
import { hash, compare } from 'bcrypt'
const saltRounds = 10

const createJWT = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
    )
}

const decodeJWT = async (token) => {
    const { id } = jwt.verify(token, process.env.JWT_SECRET)
    return id
}

const hashPassword = async (password) => await new Promise((resolve, reject) => {
    hash(password, saltRounds, (err, hash) => {
        if (err) reject(err)
        resolve(hash)
    });
})

const comparePassword = async (password, hash) => await new Promise((resolve, reject) => {
    compare(password, hash, (err, res) => {
        if (err) reject(err)
        resolve(res)
    })
})

export { createJWT, decodeJWT, hashPassword, comparePassword }