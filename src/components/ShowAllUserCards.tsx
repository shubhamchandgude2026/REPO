import { Box } from "@mui/material"
import UserCard from "./UserCard"

const ShowAllUserCards = () => {
    const users = [{
        name: "shubham",
        age: 21,
        role: "Frontend Developer",
        isActive: true,
    }]
    return (
        <Box>
            {
                users.map((user, i) => {
                    return <UserCard
                        key={i}
                        name={user.name}
                        age={user.age}
                        role={user.role}
                        isActive={user.isActive} />
                })
            }
        </Box>
    )
}

export default ShowAllUserCards