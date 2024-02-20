import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex justify-center items-center flex-col gap-10  h-screen font-jost">
            <h1 className="font-bold text-lg font">Sign-In to Gadgetz</h1>
            <SignIn />
        </div>
    );
}
