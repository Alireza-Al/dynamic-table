import React, { Fragment, useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";


export default function About() {

    const [gridData, setGridData] = useState([])

    const [loader, setLoader] = useState(false)

    useEffect(() => { aa() }, [])

    const aa = async () => {
        setLoader(true)
        try {
            let res = await axios({
                url: 'https://api.publicapis.org/entries',
                method: 'GET',
            });
            setLoader(false)
            for (let i = 0; i<10;i++) console.log(res.data.entries[i]);

            
            setGridData(res.data.entries);

        } catch (error) {
            setLoader(false)
            console.error(error)
        }
    }


    return (
        <Fragment>
            {
                loader === true ? <span>loading<Spinner animation="border" variant="success" size="sm" style={{marginTop: "40px"}}/></span> :
                    <div>
                        {gridData.map((item: any, i: number) => {
                            return (
                                <Fragment key={i}>
                                    <div style={{ marginBottom: '5px' }}>
                                        {
                                            Object.keys(item).map((field: string) => {
                                                return (
                                                    <span>
                                                        {field}:{item[field]}
                                                    </span>
                                                )
                                            })
                                        }
                                    </div>
                                </Fragment>
                            )
                        })}
                    </div>
            }
        </Fragment>
    );
}
