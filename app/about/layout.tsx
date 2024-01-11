export default function NestedLayout({
    children,
  }: {
    children: React.ReactNode
  }){
   return(
    <html>
        <body className=" bg-slate-900">
            <main>
                {children}
            </main>
        </body>
    </html>
   
   )
}