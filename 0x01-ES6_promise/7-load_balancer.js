export default function loadBalancer(chinaDownload, USDownload) {
	// Use Promise.race to return the result of the first resolved promise
	return Promise.race([chinaDownload, USDownload]);
}
