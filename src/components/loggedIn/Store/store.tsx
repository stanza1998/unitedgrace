import { observer } from "mobx-react-lite"
import react from "react"


export const AdminStore = observer(() => {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>E-Store Catalog</h3>
                <button style={{ float: "right" }} className="uk-button uk-button-default">Add Product</button>
            </div>
        </div>
    )
})