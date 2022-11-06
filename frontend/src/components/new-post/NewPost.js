import {useState} from "react";
import Grid from "@mui/material/Grid";
import {Button, Checkbox, TextareaAutosize, TextField} from "@mui/material";
import "./NewPost.css";
import ResponsiveAppBar from "../ResponsiveAppBar";
import {createGleaningPost} from "../../database/database";
import {useNavigate} from "react-router-dom";

const defaultValues = {
    farm: "",
    cropType: "",
    description: "",
    date: null,
    address: "",
    foodBank: "",
    capacity: 0,
};

const NewPost = () => {
    const date = new Date();
    defaultValues.date = date.toISOString().split('T')[0]
    const navigate = useNavigate()
    const [isUrgent, setIsUrgent] = useState(false);

    const [formValues, setFormValues] = useState(defaultValues);
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        createGleaningPost(formValues.farm, formValues.cropType, formValues.description, formValues.date, formValues.address, formValues.foodBank, formValues.capacity, isUrgent);
        navigate('/');
    };
    return (
        <div>
            <ResponsiveAppBar />
            <form onSubmit={handleSubmit} id={"form"} className={"new_post__background"}>
                <Grid className={"form__grid"} container alignItems="center" justify="center" direction="column">
                    <Grid item className={"fieldset"}>
                        <p>Farm</p>
                        <TextField
                            id="farm"
                            name="farm"
                            label="farm"
                            type="text"
                            value={formValues.name}
                            onChange={handleInputChange}
                            required
                            variant={"outlined"}
                        />
                    </Grid>
                    <Grid item className={"fieldset"}>
                        <p>Crop Type</p>
                        <TextField
                            id="cropType"
                            name="cropType"
                            label="crop type"
                            type="text"
                            value={formValues.cropType}
                            onChange={handleInputChange}
                            required
                        />
                    </Grid>
                    <Grid item className={"fieldset"}>
                        <p>Description</p>
                        <TextareaAutosize
                            minRows={10}
                            id="description"
                            name="description"
                            label="description"
                            type="text"
                            placeholder={"Enter a description about this opportunity"}
                            value={formValues.description}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item className={"fieldset"}>
                        <p>Date</p>
                        <TextField
                            id="date"
                            name="date"
                            label="date"
                            type="date"
                            value={formValues.date}
                            onChange={handleInputChange}
                            required/>
                    </Grid>
                    <Grid item className={"fieldset"}>
                        <p>Address</p>
                        <TextField
                            id="address"
                            name="address"
                            label="address"
                            type="text"
                            value={formValues.address}
                            onChange={handleInputChange}
                            required/>
                    </Grid>
                    <Grid item className={"fieldset"}>
                        <p>Food Bank</p>
                        <TextField
                            id="foodBank"
                            name="foodBank"
                            label="food bank"
                            type="text"
                            value={formValues.foodBank}
                            onChange={handleInputChange}/>
                    </Grid>
                    <Grid item className={"fieldset"}>
                        <p>Capacity</p>
                        <TextField
                            id="capacity"
                            name="capacity"
                            label="capacity"
                            type="number"
                            value={formValues.capacity}
                            onChange={handleInputChange}
                            required/>
                    </Grid>
                    <Grid item className={"fieldset"}>
                        <p>Urgent</p>
                        <Checkbox value={formValues.urgent}
                        id={"urgent"}
                        name={"urgent"}
                        onChange={() => setIsUrgent(!isUrgent)}/>
                    </Grid>
                    <Button variant="contained" color="primary" type="submit" id={"post"}>
                        Post
                    </Button>
                </Grid>
            </form>
        </div>
    );
};
export default NewPost;