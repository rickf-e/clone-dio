import React from 'react'
import { InputContainer, IconContainer, InputText, ErrorText } from './styles'
import { Controller } from 'react-hook-form'
import { IInput } from './types'

const Input = ({leftIcon, name, control, errorMessage, placeholder, ...rest}: IInput) => {
    return(
        <>
            <InputContainer>
                {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
                <Controller
                    defaultValue={''}
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field: {value, onChange} }) => (
                        <InputText value={value} onChange={onChange} placeholder={placeholder} />
                    )}
                />
            </InputContainer>
            {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
        </>
    )
}

export { Input }