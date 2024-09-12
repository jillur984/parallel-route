export default function ParallelDashBoardLayout({children,assignments,notification,quiz}){
    return (
      <>
        {children}
    <div className="grid gap-6 grid-cols-2 grid-rows-2 p-8">
     
        {assignments}
        {notification}
        {quiz}
    </div>

      </>
    )
}