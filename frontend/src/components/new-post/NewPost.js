import {useState} from "react";
import Grid from "@mui/material/Grid";
import {Button, TextareaAutosize, TextField} from "@mui/material";
import "./NewPost.css";

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
        console.log(formValues);
    };
    return (
        <form onSubmit={handleSubmit} id={"form"}>
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
                <Button variant="contained" color="primary" type="submit" id={"post"}>
                    Post
                </Button>
            </Grid>
        </form>
    );
};
export default NewPost;