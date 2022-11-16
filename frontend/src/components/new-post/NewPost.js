import {useState} from "react";
import Grid from "@mui/material/Grid";
import {Button, Checkbox, TextareaAutosize, TextField} from "@mui/material";
import "./NewPost.css";
import ResponsiveAppBar from "../ResponsiveAppBar";
import {createGleaningPost} from "../../database/database";
import {useNavigate} from "react-router-dom";

const NewPost = (props) => {
    const { user } = props;

    const defaultValues = {
        farm: user.farmName,
        address: `${user.address}, ${user.city}, ${user.province}, Canada`,
        foodBank: user.foodBank,
        cropType: "",
        description: "",
        date: null,
        capacity: 0
    };

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
    return ( user.role === 'Farmer' ? (
        <div>
            <ResponsiveAppBar
                user={user}
            />
            <form onSubmit={handleSubmit} id={"form"} className={"new_post__background"}>
                <Grid className={"form__grid"} container alignItems="center" justify="center" direction="column">
                    <Grid item className={"fieldset"}>
                        <h2>Farm Name</h2>
                        <p>{formValues.farm}</p>
                    </Grid>
                    <Grid item className={"fieldset"}>
                        <h2>Address</h2>
                        <p>{formValues.address}</p>
                    </Grid>
                    <Grid item className={"fieldset"}>
                        <h2>Associated Food Bank</h2>
                        <p>{formValues.foodBank}</p>
                    </Grid>
                    <Grid item className={"fieldset"}>
                        <h2>Crop Type</h2>
                        <TextField
                            id="cropType"
                            name="cropType"
                            type="text"
                            value={formValues.cropType}
                            onChange={handleInputChange}
                            required
                        />
                    </Grid>
                    <Grid item className={"fieldset"}>
                        <h2>Description</h2>
                        <TextareaAutosize
                            minRows={10}
                            id="description"
                            name="description"
                            type="text"
                            placeholder={"Enter a description about this opportunity"}
                            value={formValues.description}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item className={"fieldset"}>
                        <h2>Date</h2>
                        <TextField
                            id="date"
                            name="date"
                            type="date"
                            value={formValues.date}
                            onChange={handleInputChange}
                            required/>
                    </Grid>
                    <Grid item className={"fieldset"}>
                        <h2>Capacity</h2>
                        <TextField
                            id="capacity"
                            name="capacity"
                            type="number"
                            value={formValues.capacity}
                            onChange={handleInputChange}
                            required/>
                    </Grid>
                    <Grid item className={"fieldset"}>
                        <h2>Urgent</h2>
                        <Checkbox value={formValues.urgent}
                        id={"urgent"}
                        name={"urgent"}
                        onChange={() => setIsUrgent(!isUrgent)}/>
                    </Grid>
                    <Button variant="contained" color="success" type="submit" id={"post"}>
                        Post
                    </Button>
                </Grid>
            </form>
        </div>
    ) : (
        <div>Access denied!</div>
    )
    );
};
export default NewPost;