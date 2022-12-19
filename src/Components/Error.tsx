interface IErrorProps {
    error: string
}


export const Error = ({ error }: IErrorProps ) => {
    return (
        <div className="absolute text-centr text-red-600 font-bold text-3xl p-20">{ error }</div>
    )
 }