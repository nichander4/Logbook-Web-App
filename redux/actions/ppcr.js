import axios from 'axios';
import { API_URL } from 'constant';
import { getHeaders } from 'helpers/utils';
import { NEXT_PPCR_FORM, SUBMIT_PPCR_FORM, RESET_PPCR } from 'redux/types';

export const  nextPageForm = (project, terimaFaToTurunFa, turunFaTerimaPrintOut, turunFaApproveFps, turunFaAnalisa, turunFaTotal) => {
	return {
		type: NEXT_PPCR_FORM,
		project: project,
		terimaFaToTurunFa: terimaFaToTurunFa,
		turunFaTerimaPrintOut: turunFaTerimaPrintOut,
		turunFaApproveFps: turunFaApproveFps,
		turunFaAnalisa: turunFaAnalisa,
		turunFaTotal: turunFaTotal,
	};
};

export const submitFormPPCR = (printOutTerimaPpcr, printOutApproveFps, printOutAnalisa, printOutTotal, turunFaToPpcr, ppcrToBarangDatang, grandTotal) => {
	return {
		type: SUBMIT_PPCR_FORM,
		printOutTerimaPpcr: printOutTerimaPpcr,
		printOutApproveFps: printOutApproveFps,
		printOutAnalisa: printOutAnalisa,
		printOutTotal: printOutTotal,
		turunFaToPpcr: turunFaToPpcr,
		ppcrToBarangDatang: ppcrToBarangDatang,
		grandTotal: grandTotal,
	};
};

export const fetchPpcrData = (pageSize, pageNumber, searchQuery, token) => async () => {
	try {
		const header = getHeaders(token);
		const response = await axios.get(`${API_URL}/api/master/TargetLeadTimePpcr`, {
			headers: {
				...header,
				'X-PAGINATION': true,
				'X-PAGE': pageNumber,
				'X-PAGESIZE': pageSize,
				'X-SEARCH': '*' + searchQuery + '*',
			},
		});

		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const fetchPpcrDataById = (id, token) => async () => {
	try {
		const response = await axios.get(`${API_URL}/api/master/TargetLeadTimePpcr/${id}`, {
			headers: getHeaders(token),
		});
		return response.data;
	} catch (error) {
		return error.response;
	}
};

export const addPpcrData = (data, token) => async () => {
	try {
		const response = await axios({
			url: `${API_URL}/api/master/TargetLeadTimePpcr`,
			method: 'post',
			headers: getHeaders(token),
			data: data,
		});

		return response;
	} catch (error) {
		return error.response;
	}
};

export const updatePpcrData = (data, id, token) => async () => {
	try {
		const response = await axios({
			url: `${API_URL}/api/master/TargetLeadTimePpcr/${id}`,
			method: 'put',
			headers: getHeaders(token),
			data: data,
		});

		return response;
	} catch (error) {
		return error.response;
	}
};

export const deletePpcrData = (id, token) => async () => {
	try {
		const response = await axios({
			url: `${API_URL}/api/master/TargetLeadTimePpcr/${id}`,
			method: 'delete',
			headers: getHeaders(token),
		});

		return response;
	} catch (error) {
		return error.response;
	}
};

export const resetDataPpcr = () => {
	return {
		type: RESET_PPCR,
	};
};
