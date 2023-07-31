import { redirect } from "react-router-dom";
export function getAuthToken() {
	const token = localStorage.getItem("token");
	if (!token) {
		return null;
	}
	const expired = getTokenDuration() < 0;
	if (expired) {
		return "EXPIRED";
	}
	return token;
}

export function tokenLoader() {
	return getAuthToken();
}

export function getTokenDuration() {
	const storedExpirationData = localStorage.getItem("expiration");
	const expirationDate = new Date(storedExpirationData);
	const now = new Date();
	const duration = expirationDate.getTime() - now.getTime();
	return duration;
}

export function checkAuthLoader() {
	const token = getAuthToken();

	if (!token) {
		return redirect("/auth");
	}

	return null;
}
