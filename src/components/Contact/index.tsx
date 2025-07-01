import React, { useState, useEffect, useRef } from 'react'
import {
    Box,
    Button,
    Card,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    TextField,
} from '@mui/material'
import emailjs from '@emailjs/browser'
import { Background } from 'react-parallax'
import { StyledForm } from 'components/styled'

interface FormValues {
    name?: string
    email?: string
    message?: string
}

export default function Contact() {
    const form = useRef<HTMLFormElement>(null)
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        if (!form.current) {
            console.error('Form reference is null')
            return
        }
        
        emailjs
            .sendForm(
                import.meta.env.VITE_EMAIL_SERVICE,
                import.meta.env.VITE_EMAIL_TEMPLATE,
                form.current,
                import.meta.env.VITE_EMAIL_KEY
            )
            .then(
                (result) => {
                    form.current?.reset()
                },
                (error) => {
                    console.error('Email send failed:', error)
                    form.current?.reset()
                }
            )
    }
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div>
                <StyledForm ref={form} onSubmit={sendEmail}>
                    <div className="center">
                        <div className="formTitle">Contact Me</div>
                    </div>
                    <div className="center">
                        <div className="formSubtitle">Send an Email</div>
                    </div>

                    <div className="input-container ic1">
                        <input
                            className="input"
                            type="text"
                            name="from_name"
                            id="from_name"
                            placeholder=" "
                        />
                        <div className="cut"></div>
                        <label className="placeholder" htmlFor="from_name">
                            Name
                        </label>
                    </div>
                    <div className="input-container ic2">
                        <input
                            className="input"
                            type="text"
                            name="reply_to"
                            id="reply_to"
                            placeholder=" "
                        />
                        <div className="cut"></div>
                        <label htmlFor="reply_to" className="placeholder">
                            Email Address
                        </label>
                    </div>
                    <div className="input-container ic2">
                        <input
                            className="input"
                            type="text"
                            name="message"
                            id="message"
                            placeholder=" "
                        />
                        <div className="cut"></div>
                        <label className="placeholder" htmlFor="message">
                            Message
                        </label>
                    </div>

                    <button type="submit" className="submit">
                        Send Email
                    </button>
                </StyledForm>
            </div>
        </Box>
    )
}
