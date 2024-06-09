import React from 'react';


type UniversalButtonProps = {
    onClick: () => void
    name: string
    disabled?: boolean
}
export const UniversalButton = (props: UniversalButtonProps) => {
    return (
        <div>
            <button
                onClick={props.onClick}
                disabled={props.disabled}
            >
                {props.name}
            </button>
        </div>
    );
};

