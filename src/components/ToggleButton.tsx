import React from "react";
import { MaterialSymbol } from "react-material-symbols";

interface ToggleButtonProps {
    isEmpty: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = (e: ToggleButtonProps): JSX.Element => {
    return e.isEmpty ? (
        <MaterialSymbol icon="calendar_today" size={20} color="#A4A4A4" />
    ) : (
        <MaterialSymbol icon="calendar_today" size={20} color="#A4A4A4" />
    );
};

export default ToggleButton;
