import React, {ReactNode} from "react";
import { ReactDOM } from "react";
interface CDivParams {
    children: ReactNode;
}
export default function(props: CDivParams){
    return <div className="fill-width center-elements">{props.children}</div>
}
