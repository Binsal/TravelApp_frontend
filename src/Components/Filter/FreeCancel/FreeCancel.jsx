import './FreeCancel.css'
export const FreeCancel = () =>{
    return (
        <div className="filter-container">
            <div className="d-flex align-center gap-larger">
                <span className="filter-label">Free Cancelation</span>
                <label className="slide">
                    <input type="checkbox"></input>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    )
}