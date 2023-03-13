export default function(props: { children: React.ReactNode } ){

    function isWindowDefined(){
        return typeof window !== "undefined";
    }

    return (
        <>
        {isWindowDefined() ? props.children : <></>}
        </>
    )
} 