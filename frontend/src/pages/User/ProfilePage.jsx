import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { useParams } from 'react-router-dom'
import { Avatar, Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { useQuery } from '@apollo/client'
import { useHistory } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import { UserQuery } from '../../graphql';

function ProfilePage({ name, courses }) {
    let { id } = useParams()
    const history = useHistory();

    const { loading, error, data } = useQuery(UserQuery, {
        variables: { id: id }
    })

    if (loading) {
        return <Spinner/>
    }

    if (error) {
        return <Spinner/>
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "95vh" }}>
            <div>
                <Typography variant='h3' style={{ margin: "20px" }}>{data?.user.firstname + " " + data?.user.lastname}</Typography>
                <div style={{ flex: 1, marginBottom: "20px" }}>
                    <Avatar
                        src={data?.user?.image}
                        style={{ width: "10rem", height: "10rem", marginLeft: "auto", marginRight: "auto" }}
                    />
                </div>
                {courses.map(c => <Typography variant='h5' style={{ color: "grey" }}>{c}</Typography>)}
            </div>
            <div style={{ flex: 1, display: "grid", placeItems: "center" }}>
                <ReactAudioPlayer
                    src={data?.user?.voice}
                    type="audio/mpeg"
                    autoPlay
                    controls
                />
            </div>
            <div>
                <Button color={"primary"} size={"large"} onClick={_ => history.push("/score")}>Next</Button>
            </div>
        </div>
    )
}

export default ProfilePage;
