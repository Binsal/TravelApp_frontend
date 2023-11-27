import "./PriceRange.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useFilter } from "../../../context";

const value=10;

function valuetext(value) {
  return `${value}`;
}

export const PriceRange = () => {
 
  return (
    <div className="filter-container">
        <span className="filter-label">Price Range</span>
            <Box>
                <Slider
                sx={{ color: "#ff6525" }}
                getAriaLabel={() => "Minimum Difference"}
                value={value}
                valueLabelDisplay="on"
                getAriaValueText={valuetext} 
                min={100}
                max={25000}
                disableSwap
                />
            </Box>
    </div>
  );
};