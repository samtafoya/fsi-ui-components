import "./fsi.css"

export type DynamicClassProps = {
    steps: {
        id: string,
        criteria?: "A" | "B" | "C" | "N" | "" | undefined;
    }[];
};

export const classes = {
    A: "ikf-step-a",
    B: "ikf-step-b",
    C: "ikf-step-c",
    N: "ikf-step-n",
};

export function DynamicClass(props: DynamicClassProps) {
    const getClassName = (criteria?: string | undefined) => {
        switch (criteria) {
            case "A": 
                return classes.A;
            case "B": 
                return classes.B;
            case "C": 
                return classes.C;
            case "N": 
                return classes.N;
            default: 
                return "";
        }
    }
    return (
        <ul>
            {props.steps.map((step) => {
                return (
                    <li className={`ikf-li-bracket-steps ${getClassName(step.criteria)}`}>{`Step ${step.criteria}`}</li>
                )
            })}
        </ul>
    )
}