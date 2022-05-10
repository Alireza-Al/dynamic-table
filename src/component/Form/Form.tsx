import React, { Fragment, useEffect, useState } from 'react'

interface FormProps {
    data?: {
        API: string,
        Auth: string,
        Category: string,
        Cors: string,
        Description: string,
        HTTPS: string,
        Link: string,
    },
    isUpdateMode: boolean,
    onAccept: (data:
        {
            API: string,
            Auth: string,
            Category: string,
            Cors: string,
            Description: string,
            HTTPS: string,
            Link: string,
        }) => void,
    onCancel: () => void
}

export default function Form(props: FormProps) {

    const [data, setData] = useState<{ // types
        API: string,
        Auth: string,
        Category: string,
        Cors: string,
        Description: string,
        HTTPS: string,
        Link: string,
    }>({ // values
        API: '',
        Auth: '',
        Category: '',
        Cors: '',
        Description: '',
        HTTPS: '',
        Link: '',
    })

    useEffect(() => {
        if (props.isUpdateMode === true) setData(props.data ? props.data : {
            API: '',
            Auth: '',
            Category: '',
            Cors: '',
            Description: '',
            HTTPS: '',
            Link: '',
        })
    }, [])

    const ValidateAndAccept = (data: {
        API: string,
        Auth: string,
        Category: string,
        Cors: string,
        Description: string,
        HTTPS: string,
        Link: string,
    }): boolean => {
        let validate: boolean = true
        let fields: Array<'API' | 'Auth' | 'Category' | 'Cors' | 'Description' | 'HTTPS' | 'Link'> = Object.keys(data) as Array<'API' | 'Auth' | 'Category' | 'Cors' | 'Description' | 'HTTPS' | 'Link'>;
        for (let i = 0; i < fields.length; i++) {
            if (!data[fields[i]] || typeof data[fields[i]] !== 'string' || data[fields[i]] === '') {
                validate = false
            }
            if (validate === false) break;
        }
        return validate
    }

    return (
        <div>
            {
                (Object.keys(data) as Array<'API' | 'Auth' | 'Category' | 'Cors' | 'Description' | 'HTTPS' | 'Link'>).map((field: 'API' | 'Auth' | 'Category' | 'Cors' | 'Description' | 'HTTPS' | 'Link', index: number) => {
                    return <Fragment key={index}>
                        <label htmlFor="">
                            {field}
                        </label>
                        <input
                            type="text"
                            placeholder={field}
                            value={data[field]}
                            onChange={(e: any) => {
                                let value: string = '';
                                if (e.target.value && typeof e.target.value === 'string') {
                                    value = e.target.value
                                }
                                setData({...data,[field]: value})
                            }}
                        />
                    </Fragment>
                })
            }
            <div>
                <button onClick={() => { props.onCancel() }}>Cancel</button>
                <button onClick={() => {
                    if (ValidateAndAccept(data)) {
                        props.onAccept(data)
                    }
                }}>Accept</button>
            </div>
        </div>
    )
}
