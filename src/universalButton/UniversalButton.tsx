import React from 'react';


type UniversalButtonProps = {
    onClick: () => void
    name: string
}
export const UniversalButton = (props: UniversalButtonProps) => {
    return (
        <div>
            <button onClick={props.onClick}>{props.name}</button>
        </div>
    );
};

