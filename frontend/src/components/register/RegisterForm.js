import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import './RegisterForm.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import YardIcon from "@mui/icons-material/Yard";
import { writeFarmerData } from "../../database/database";

function RegisterForm(props) {
    const { user, setUser } = props;

    const navigate = useNavigate();
    const [farmName, setFarmName] = useState('');
    const [foodBankName, setFoodBankName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [availability, setAvailability] = useState('');
    const [password, setPassword] = useState('');
    const [groupSize, setGroupSize] = useState('');
    const [maxDistance, setMaxDistance] = useState('');
    const [capacity, setCapacity] = useState('');
    const [foodBank, setFoodBank] = useState('');

    const register = () => {
        // Check required fields are filled
        // Save user info to the database
        if (user.role === 'Farmer') {
            writeFarmerData(
                farmName,
                firstName,
                lastName,
                address,
                city,
                province,
                email,
                phone,
                availability,
                password,
                foodBank,
                setUser
            );

            setUser(prev => ({ ...prev,
                farmName: farmName,
                firstName: firstName,
                lastName: lastName,
                address: address,
                city: city,
                province: province,
                email: email,
                phone: phone,
                availability: availability,
                password: password,
                foodBank: foodBank
            }));
        }
        navigate('/');
    };

    return (
        <div className={"register__background"}>
            <div className="register__long">
                <form className="register__container">
                    <h1 className='app_name'>
                        <Link href="/" underline='none'>
                            <span className={"green"}><YardIcon/></span>
                            <span className={"black"}> GLEAN</span><span className={"green"}>ful</span>
                        </Link>
                    </h1>
                    <p>Already have an account?</p>
                    <Link href="login" underline="none">Login</Link>
                    <Divider variant={"middle"} className={"login__separation"}>
                        <Chip label={"Or register"} color={"default"}/>
                    </Divider>
                    {user.role === 'Farmer' && (
                        <>
                            <TextField
                                label="Farm Name"
                                type='text'
                                value={farmName}
                                onChange={(e) => setFarmName(e.target.value)}
                                placeholder='Plentiful Farm'
                            />
                        </>
                    )}

                    {user.role === 'Food Bank' && (
                        <>
                            <TextField
                                label="Food Bank Name"
                                type='text'
                                value={foodBankName}
                                onChange={(e) => setFoodBankName(e.target.value)}
                                placeholder='Jim Food Bank'
                            />
                        </>
                    )}
                    <TextField
                        label="First Name"
                        type='text'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='John'
                    />

                    <TextField
                        label="Last Name"
                        type='text'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder='Smith'
                    />

                    <TextField
                        label="Address"
                        type='text'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder='5555 First Street'
                    />

                    <TextField
                        label="City"
                        type='text'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder='Montreal'
                    />

                    <TextField
                        label="Province"
                        type='text'
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                        placeholder='Quebec'
                    />

                    <TextField
                        label="Email"
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='john.smith@email.ca'
                    />

                    <TextField
                        label="Phone Number"
                        type='text'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder='1-514-999-9999'
                    />

                    <TextField
                        label="Availability"
                        type='text'
                        value={availability}
                        onChange={(e) => setAvailability(e.target.value)}
                        placeholder='Aug 5 - Aug 8 from 9 AM to 5 PM'
                    />

                    <TextField
                        label="Password"
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {user.role === 'Gleaner' && (
                        <>
                            <TextField
                                label="Group size (minimum of 5)"
                                type='number'
                                value={groupSize}
                                onChange={(e) => setGroupSize(e.target.value)}
                                placeholder='8'
                                min={5}
                            />
                        </>
                    )}

                    {(user.role === 'Gleaner' || user.role === 'Food Bank') && (
                        <>
                            <TextField
                                label="Max distance (km)"
                                type='number'
                                value={maxDistance}
                                onChange={(e) => setMaxDistance(e.target.value)}
                                placeholder='20'
                            />
                        </>
                    )}

                    {(user.role === 'Farmer' || user.role === 'Food Bank') && (
                        <>
                            <TextField
                                label="Capacity"
                                type='number'
                                value={capacity}
                                onChange={(e) => setCapacity(e.target.value)}
                                placeholder='25'
                            />
                        </>
                    )}

                    {user.role === 'Farmer' && (
                        <>
                            <TextField
                                label="Associated Food Bank"
                                type='text'
                                value={foodBank}
                                onChange={(e) => setFoodBank(e.target.value)}
                                placeholder='Donations Welcome Food Bank'
                            />
                        </>
                    )}

                    <p>
                        By clicking Register, you agree to the Gleanful <br/><a href='legal'>User Agreement</a>,{' '}
                        <a href='legal'>Privacy Policy</a>, and <a href='legal'>Cookie Policy</a>.
                    </p>

                    <Button
                        variant={"contained"}
                        className="register__btn"
                        onClick={register}>
                        Register
                    </Button>
                    <Button
                        variant={"contained"}
                        color={"warning"}
                        onClick={() => setUser({})}>
                        Back
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;
