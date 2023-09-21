import TextField from '@mui/material/TextField';
import { v4 as uuid } from 'uuid';

export default function AddNewItemField({ itemList, setItemList }) {



    const handleChange = (e) => {
        if (e.target.value !== "") {
            const newItemList = [...itemList]
            newItemList.push({ "id": uuid(), "name": e.target.value, "done": false });
            setItemList(newItemList);
            e.target.value = "";
        }
    }


    return (
        <TextField id="filled-basic" label="New Item" variant="filled" onBlur={handleChange}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    handleChange(e);
                }
            }} />
    )
}