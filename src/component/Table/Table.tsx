import { Fragment, useEffect, useState } from 'react'
import { IconButton } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '/dynamic-table/src/asset/TableItSelf.scss'

export enum TABLE_ACTIONS {
    EDIT = 'EDIT',
    DELETE = 'DELETE'
}

interface TableProps {
    data: Array<any>,
    actions: Array<{
        actionIcon: any,
        actionType: TABLE_ACTIONS
    }>,
    onClickCallBack: (i: number, type: TABLE_ACTIONS) => void,
    onCreate: () => void
}

export default function Table(props: TableProps) {

    const [fields, setFields] = useState<Array<string>>([])

    useEffect(() => {
        if (props.data.length === 0) return
        let newFields: Array<string> = Object.keys(props.data[0])
        setFields(newFields)
    }, [])

    useEffect(() => {
        if (props.data.length === 0) return
        let newFields: Array<string> = Object.keys(props.data[0])
        setFields(newFields)
    }, [props.data])


    return (
        <div className='d-block'>
            <div className='d-block '>
                {
                    props.data.length === 0 ? ""
                        :
                        <>
                            <div className='d-inline-block rowStyle'>
                                Row
                            </div>
                            {fields.map((item: string, index: number) => {
                                return <Fragment key={index}>
                                    <div className='d-inline-block topStyle' style={{ maxWidth: `${97 / (fields.length + 1)}%`, minWidth: `${97 / (fields.length + 1)}%` }}>
                                        {item}
                                    </div>
                                </Fragment>
                            })}
                            <div className='d-inline-block actionStyle'>
                                Actions
                            </div>
                        </>
                }
            </div>
            <div className="d-block">
                {
                    props.data.length === 0 ? "No Data To Display"
                        :
                        <>
                            {
                                props.data.map((item: any, index: number) => {
                                    return <Fragment key={index}>
                                        <div className="d-block">
                                            <div className='d-inline-block indexStyle' style={{ maxWidth: `3%`, minWidth: `3%` }}>
                                                {index + 1}
                                            </div>
                                            {fields.map((field: string, j: number) => {
                                                return <Fragment key={j}>
                                                    <div className='d-inline-block itemsStyle' style={{ maxWidth: `${97 / (fields.length + 1)}%`, minWidth: `${97 / (fields.length + 1)}%` }}>
                                                        {item[field]}
                                                    </div>
                                                </Fragment>
                                            })}
                                            <div className='d-inline-block' style={{ maxWidth: `${97 / (fields.length + 1)}%`, minWidth: `${97 / (fields.length + 1)}%` }}>
                                                {props.actions.length === 0 ? undefined
                                                    :
                                                    props.actions.map((item: {
                                                        actionIcon: any,
                                                        actionType: TABLE_ACTIONS
                                                    }, i: number) => {
                                                        return <IconButton onClick={() => { props.onClickCallBack(index, item.actionType) }}>
                                                            {item.actionIcon}
                                                        </IconButton>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </Fragment>
                                })
                            }
                        </>
                }
            </div>
            <div className='d-block'>
                <button onClick={() => props.onCreate()}>Create</button>
            </div>
        </div>
    )
}
