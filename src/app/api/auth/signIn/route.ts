import connectToDB from '@/config/db'
import userModel from '@/models/User'
import { generateAccessToken, generateRefreshToken, validateEmail, validatePassword, verifyPassword } from '@/utility/auth'

export async function POST(req: Request) {

    try {
        await connectToDB()
        const body = await req.json()
        const { email, password } = body

        const validEmail = validateEmail(email)
        const validPassword = validatePassword(password)

        if (!validEmail || !validPassword) {
            return Response.json({ message: 'email or password is wrong!!' })
        }
        const user = await userModel.findOne({ email })

        if (!user) {
            return Response.json({ message: 'user email not found!!' }, { status: 401 })
        }

        const verifyValidPassword = await verifyPassword(password, user.password)

        if (!verifyValidPassword) {
            return Response.json({ message: 'user email or password is wrong!!' }, { status: 401 })
        }


        const accessToken = generateAccessToken(email)


        const refreshToken = generateRefreshToken(email)

        if (refreshToken) {
            await userModel.findOneAndUpdate({ email }, {
                refreshToken
            })
        }

        return Response.json(
            { message: "User logged in successfully :))" },
            {
                status: 200,
                headers: {
                    "Set-Cookie": `token=${accessToken};path=/;httpOnly=true;`,
                },
            }
        );

    } catch (error) {
        return Response.json({ message: error }, { status: 500 })
    }
}