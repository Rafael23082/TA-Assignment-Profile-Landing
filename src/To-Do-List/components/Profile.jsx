import { Button } from "./Button";

export const Profile = () => {
    return (
        <>
            <div className="flex items-center justify-center w-[100%] h-[100vh] overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-4xl mt-[1em]">My Profile</p>
                    <div className="mt-[1em] w-[50%] md:w-[40%] lg:w-[30%] aspect-[1/1] overflow-hidden">
                        <img className="object-center object-cover w-[100%] h-[100%]" src="image.jpg" />
                    </div>
                    <p className="mt-4">Name: Rafael Anderson</p>
                    <p className="mt-1 w-80 text-center">Hello! My name is Rafael Anderson of the L4AC Class. Nice to meet you!</p>
                    <div className="w-full flex justify-center">
                        <Button color="bg-blue-500" hover = "hover:bg-blue-800" message = "Back" navigateTo="/"></Button>
                    </div>
                </div>
            </div>
        </>
    );
}