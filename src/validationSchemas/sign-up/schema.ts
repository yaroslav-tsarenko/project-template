import { AlertColor } from "@mui/material/Alert";
import { COUNTRIES } from "@/constants/countries";

export interface SignUpValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    dateOfBirth: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
}

export const signUpInitialValues: SignUpValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    dateOfBirth: "",
    street: "",
    city: "",
    country: "",
    postalCode: "",
};

export const signUpValidation = (values: SignUpValues) => {
    const errors: Partial<Record<keyof SignUpValues, string>> = {};

    if (!values.firstName.trim()) errors.firstName = "First name is required";
    if (!values.lastName.trim()) errors.lastName = "Last name is required";

    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Invalid email address";
    }

    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
    }

    if (!values.phone.trim()) {
        errors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s\-()]{7,20}$/.test(values.phone.trim())) {
        errors.phone = "Invalid phone number";
    }

    if (!values.dateOfBirth) {
        errors.dateOfBirth = "Date of birth is required";
    } else {
        const dob = new Date(values.dateOfBirth);
        const now = new Date();
        const age = now.getFullYear() - dob.getFullYear();
        if (age < 18) errors.dateOfBirth = "You must be at least 18 years old";
        if (age > 120) errors.dateOfBirth = "Invalid date of birth";
    }

    if (!values.street.trim()) errors.street = "Street address is required";
    if (!values.city.trim()) errors.city = "City is required";
    if (!values.country) errors.country = "Country is required";
    else if (!COUNTRIES.includes(values.country)) errors.country = "Please select a valid country";
    if (!values.postalCode.trim()) errors.postalCode = "Postal code is required";

    return errors;
};

export const signUpOnSubmit = async (
    values: SignUpValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
    showAlert: (msg: string, desc?: string, severity?: AlertColor) => void,
    router: { replace: (url: string) => void; refresh: () => void }
) => {
    try {
        const payload = {
            firstName: values.firstName.trim(),
            lastName: values.lastName.trim(),
            email: values.email.trim().toLowerCase(),
            password: values.password,
            phone: values.phone.trim(),
            dateOfBirth: values.dateOfBirth,
            address: {
                street: values.street.trim(),
                city: values.city.trim(),
                country: values.country,
                postalCode: values.postalCode.trim(),
            },
        };

        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (res.ok && data?.user) {
            showAlert("Registration successful!", "", "success");
            router.replace("/");
            router.refresh();
        } else {
            showAlert(data?.message || "Registration failed", "", "error");
        }
    } catch (e: any) {
        showAlert(e?.message || "Network error", "", "error");
    } finally {
        setSubmitting(false);
    }
};