import jwt from 'jsonwebtoken'

const createJWT = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
    )
}

const decodeJWT = async(token)=> {
    const {id} = jwt.verify(token, process.env.JWT_SECRET)
    return id
}

export {createJWT, decodeJWT}