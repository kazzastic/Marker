import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';


function Navigation(props){
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to = '/' exact >
                        Home
                    </NavLink>
                </li>

                <li>
                    <div>
                        <NavLink to = '/manage'>
                            Manage
                        </NavLink>

                        <div>
                            <label>
                                {props.objects > 0?props.objects:''}
                            </label>
                        </div>
                    </div>
                </li>

            </ul>
        </nav>
    );
}


const mapStateToProps = ({objects}) => ({
    objects:objects.length
});


export default connect(mapStateToProps)(Navigation);