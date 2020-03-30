import React from 'react'
import EditMessage from './EditMessage'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import './Messaging.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';


const useStyles = makeStyles(theme => ({
    container: {
        "flex-direction": 'row, wrap',
        margin: '0 0 30px',
        'border-radius': '10px',
        'flex-basis': '50%',
        content: {
            height: 3,
            padding: 0,
        },
    },
    root: {
        // padding: '10px 40px 10px',
        display: 'flex',
        justifyContent: 'flex-start',
        // "flex-wrap": 'wrap',
        // margin: '30px',
        'border-radius': '10px',
        content: {
            height: 3,
            width: '20px',
            padding: 0,
        },
    },
    active: {
        "background-color": 'rgba(0, 0, 0 )',
        color: 'white',
        display: 'flex',
        justifyContent: 'flex-start',
        "flex-wrap": 'wrap',
        // alignContent: "space-between",
        // margin: '30px',
        'border-radius': '10px',
    },
    buttons: {
        padding: 0,
        width: '30px',
    }
}));





export default function MessageEach(props) {
    let display = ''
    let pic = ''
    let displayActive = ''
    let activePath = props.currentUser
    let path = props.message.match
    if (path.dater.id) {
        if (props.message.logged_in_user_id === path.dater.id) {
            display = path.dater
        }
        else {
            display = path.matched_with
        }
        if (activePath[0]) {
            if (display.id === activePath[0].id) {
                displayActive = true
            }
            else {
                displayActive = false
            }
            console.log(displayActive)
        }
        pic = display.profile_pic
        console.log(display.user.first_name)
        console.log(display.profile_pic)
    }

    const classes = useStyles();
    const [showText, setShowText] = useState(false);


    return (
        <>
            <div className={classes.container} >
                    <Card className={
                        displayActive ?
                            classes.active :
                            classes.root
                    } >
                                {/* <div> */}
                        <Avatar src={display.profile_pic} alt="avatar" id="avatar" />

                        <CardContent className="classes.content">
                            <Typography gutterBottom variant="h5" component="h3">
                                {display.user.first_name}
                            </Typography>
                            <Typography variant="body1"  component="p">
                                {!showText && props.message.message_body}
                            </Typography>
                        </CardContent>
                {/* </div> */}
                <div>
                        <CardActionArea>
                            <CardActions className="buttons">
                                {!showText && displayActive && <EditTwoToneIcon size="medium" color="action" onClick={() => setShowText(!showText)}></EditTwoToneIcon>}

                                {showText && <VisibilityTwoToneIcon size="medium" color="action" onClick={() => setShowText(!showText)}>See Message</VisibilityTwoToneIcon>}

                                {showText && <EditMessage {...props} />}

                                {displayActive && <DeleteTwoToneIcon size="medium" color="action" onClick={() => props.deleteMessage(props.message.id)}></DeleteTwoToneIcon>}
                            </CardActions>
                        </CardActionArea>
                </div>
                    </Card>
            </div>
        </>
    )
}
