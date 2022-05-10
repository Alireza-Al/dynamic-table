import React, { useState, useEffect, Fragment } from 'react';
import { Delete,Edit} from '@mui/icons-material';
// import '/dynamic-table/src/asset/Nav.scss';
import Content from '../TableInitialContent/TableContent';
import Table from '../Table/Table';
import { TABLE_ACTIONS } from '../Table/Table';
import Form from '../Form/Form';

// export const handleAddingRow = (props: any, event: any) => {
//     event.preventDefault();

//     let value = [...props]
//     value[0][event.target.name] = event.target.value

//     return value
// }



function Register() {

    const [mySet, setMySet] = useState<Array<any>>([]);

    // const [addBox, setAddBox] = useState<Array<any>>([{
    //     API: '',
    //     Auth: '',
    //     Category: '',
    //     Cors: '',
    //     Description: '',
    //     HTTPS: '',
    //     Link: '',
    // }]);


    const [formState, setFormState] = useState<{ isUpdateMode: boolean, selectedIndex: number | null | undefined }>
        ({
            isUpdateMode: false,
            selectedIndex: undefined,
        })

    // const [addBoxesState, setAddBoxesState] = useState(false);

    // const [editAndDeleteState, setEditAndDeleteState] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let res = await Content();
        setMySet(res)
    }



    // const [loader, setLoader] = useState(false)


    // const addBoxesValidation = (data: Array<any>) => {
    //     if (data.length < 15) return true;

    //     else return false;
    // }

    // const handleChanging = (event: any) => {
    //     event.preventDefault();

    //     let value = [...addBox]
    //     value[0][event.target.name] = event.target.value

    //     setAddBox([...addBox, value])
    // }

    // const AppearBoxes = () => {
    //     if (addBoxesValidation(mySet) === false) {
    //         return
    //     } else {
    //         return setAddBoxesState(true);
    //     }
    // }

    // const CancelButtonHandler = () => {
    //     let yy = Object.values(addBox[0])
    //     console.log(yy);
    //     while (yy.length) yy.pop()
    //     console.log(yy);
    //     return yy;
    // }


    return (
        <>
            <Table
                data={mySet}
                actions={
                    [
                        {
                            actionIcon: <Edit />,
                            actionType: TABLE_ACTIONS.EDIT
                        },
                        {
                            actionIcon: <Delete />,
                            actionType: TABLE_ACTIONS.DELETE
                        }
                    ]
                }
                onClickCallBack={(i: number, type: TABLE_ACTIONS) => {
                    if (type === TABLE_ACTIONS.EDIT) {
                        if (formState.selectedIndex !== undefined) { return }
                        setFormState({ isUpdateMode: true, selectedIndex: i })
                    }
                    if (type === TABLE_ACTIONS.DELETE) {
                        if (formState.selectedIndex !== undefined) { return }
                        let newSet: Array<any> = [...mySet]
                        newSet.splice(i, 1)
                        setMySet(newSet)
                    }
                }}
                onCreate={() => {
                    if (formState.selectedIndex !== undefined) return
                    setFormState({
                        isUpdateMode: false,
                        selectedIndex: null
                    })
                }}
            />

            {
                formState.selectedIndex === undefined
                    ? undefined
                    : formState.selectedIndex === null
                        ? <Form
                            isUpdateMode={false}
                            onCancel={() => {
                                setFormState({
                                    isUpdateMode: false,
                                    selectedIndex: undefined,
                                })
                            }}
                            onAccept={(data:
                                {
                                    API: string;
                                    Auth: string;
                                    Category: string;
                                    Cors: string;
                                    Description: string;
                                    HTTPS: string;
                                    Link: string;
                                }
                            ) => {
                                let newSet = mySet;
                                newSet.push(data);
                                setMySet(newSet);
                                setFormState({
                                    isUpdateMode: false,
                                    selectedIndex: undefined,
                                })
                            }}
                        />
                        : <Form
                            isUpdateMode={true}
                            data={mySet[formState.selectedIndex]}
                            onCancel={() => {
                                setFormState({
                                    isUpdateMode: false,
                                    selectedIndex: undefined,
                                })
                            }}
                            onAccept={(data:
                                {
                                    API: string;
                                    Auth: string;
                                    Category: string;
                                    Cors: string;
                                    Description: string;
                                    HTTPS: string;
                                    Link: string;
                                }
                            ) => {
                                let newSet = mySet;
                                newSet.splice(formState.selectedIndex!, 1, data)
                                setMySet(newSet)
                                setFormState({
                                    isUpdateMode: false,
                                    selectedIndex: undefined,
                                })

                            }}
                        />
            }

            {/* <TableHead>
                <TableRow>
                    <InitialTable />
                    <TableCell align='right'><Button onClick={() => { AppearBoxes(); setEditAndDeleteState(!editAndDeleteState) }}
                    >New</Button>
                    </TableCell>
                </TableRow>
            </TableHead>*/}


            {/* <div>
                {mySet.map((field: any, index: any) => (
                    <TableBody key={index}>
                        <TableRow>
                            <TableBodyStuff
                                index={index}
                                cellApi={field.API}
                                cellAuth={field.Auth}
                                cellCategory={field.Category}
                                cellCors={field.Cors}
                                cellDescription={field.Description}
                                cellHttps={field.HTTPS}
                                cellLink={field.Link}
                            />
                            {editAndDeleteState &&
                                <TableCell
                                    className='editField'
                                    align='right'
                                ><IconButton>
                                        {<Edit />}
                                    </IconButton>
                                    <IconButton onClick={() => {
                                        setMySet(Remover(mySet, index))
                                    }}>
                                        {<Delete />}
                                    </IconButton>
                                </TableCell>
                            }
                        </TableRow>
                    </TableBody>
                ))}
            </div>  */}


            {/* {addBoxesState &&
                <div style={{ marginLeft: '700px', marginBottom: '200px' }}>
                    <TextField
                        className='API'
                        label='API'
                        name='API'
                        variant='filled'
                        value={addBox[0].API}
                        onChange={handleChanging}
                        required
                    />
                    <TextField
                        className='Auth'
                        label='Auth'
                        name='Auth'
                        variant='filled'
                        value={addBox[0].Auth}
                        onChange={handleChanging}
                        required
                    />
                    <TextField
                        className='Category'
                        label='Category'
                        name='Category'
                        variant='filled'
                        value={addBox[0].Category}
                        onChange={handleChanging}
                        required
                    />
                    <TextField
                        className='Cors'
                        label='Cors'
                        name='Cors'
                        variant='filled'
                        value={addBox[0].Cors}

                        onChange={handleChanging}
                        required
                    /><br />
                    <TextField
                        className='Description'
                        label='Description'
                        name='Description'
                        variant='filled'
                        value={addBox[0].Description}
                        onChange={handleChanging}
                        required
                    />
                    <TextField
                        className='HTTPS'
                        label='HTTPS'
                        name='HTTPS'
                        variant='filled'
                        value={addBox[0].HTTPS}
                        onChange={handleChanging}
                        required
                    />
                    <TextField
                        className='Link'
                        label='Link'
                        name='Link'
                        variant='filled'
                        value={addBox[0].Link}
                        onChange={handleChanging}
                        required
                    />

                    <IconButton className='addButton' type='button' onClick={() => {
                        setMySet([...mySet, AddItems(addBox)]);
                        setAddBoxesState(!addBoxesState)
                        setEditAndDeleteState(!editAndDeleteState)
                    }}>
                        {<Add />}
                    </IconButton> */}

            {/* <IconButton className='cancelButtton' type='reset'
                    onClick={() => { 
                        setAddBoxesState(false);
                        setEditAndDeleteState(!editAndDeleteState) 
                        }}>
                        {<Delete />}
                    </IconButton>
                </div>
            } */}
            {/* <br /><br /><br /><br /><br /><br />
            <ButtonComponent
                id='123'
                className='btn btn-info'
                loading={loader}
                disable={loader}
                title='jafar'
                onClick={(id: string) => { setLoader(!loader); console.log(id); }}
            />
            <ButtonComponent
                id='999'
                className='btn btn-info'
                loading={!loader}
                disable={!loader}
                title='mamad'
                onClick={(id: string) => { setLoader(!loader); console.log(id); }}
            /> */}
        </>
    );

}


export default Register;

