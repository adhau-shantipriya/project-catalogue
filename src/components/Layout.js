import Header from "./Header";

export default function Layout(props) {
  const { children } = props;  
  return (
    <>
      <Header />
      <main className="site-main">
        {children}
      </main>
    </>
  )
}
