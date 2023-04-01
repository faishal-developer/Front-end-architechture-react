import { toast } from "react-toastify";
import { getDELETECall } from "../../ApiServices/ApiServices";
import { Endpoints } from "../../ApiServices/apiEndPoints";
import { pagetitle } from "../../helper/CommonFunction";

const useHomeLogics = () => {
    const handleClose = (setShow) => setShow(false);

    const handleShow = (item,setShow,setEditItem) => {
        console.log("handleshow")
        setShow(true);
        setEditItem(item);
    }

    const handleChage = (e,{editItem,setEditItem}) => {
        console.log(e.target.name, e.target.value);
        setEditItem({
            ...editItem,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e,{editItem,dispatch,UpdateData,setEditItem,setShow,toast}) => {
        e.preventDefault();
        dispatch(UpdateData(editItem));
        setEditItem({});
        setShow(false);
        toast.success(editItem.create?"Created Successfully":"Edited Successfully");
    }

    const Delete = (id,{dispatch,DeleteUser,toast}) => {
        dispatch(DeleteUser({ id }));
        toast.success("Deleted Successfully");
    }

    const getItem=({title,reduxData,setPageLoader,dispatch,setData})=>{
        pagetitle(title);
        if (reduxData.length >= 1) {
            setPageLoader(false);
            return;
        }
        getDELETECall(Endpoints.users, {
            method: 'GET',
            thenCB: (data) => { dispatch(setData(data)) },
            catchCB: (er) => { toast.error('Something went wrong') },
            finalyCB: () => { setPageLoader(false); }
        })
    }


    return {
        handleClose,
        handleChage,
        handleShow,
        handleSubmit,
        Delete,
        getItem
    }
};

export default useHomeLogics;