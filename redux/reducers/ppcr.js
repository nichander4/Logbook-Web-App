import { NEXT_PPCR_FORM, SUBMIT_PPCR_FORM, RESET_PPCR } from 'redux/types';

const initialState = {
	project: '',
	terimaFaToTurunFa: '',
	turunFaTerimaPrintOut: '',
	turunFaApproveFps: '',
	turunFaAnalisa: '',
	turunFaTotal: '',
	printOutTerimaPpcr: '',
	printOutApproveFps: '',
	printOutAnalisa: '',
	printOutTotal: '',
	turunFaToPpcr: '',
	ppcrToBarangDatang: '',
	grandTotal: '',
};

const ppcrReducer = (state = initialState, action) => {
	switch (action.type) {
		case NEXT_PPCR_FORM:
			return {
				...state,
				project: action.project,
				terimaFaToTurunFa: action.terimaFaToTurunFa,
				turunFaTerimaPrintOut: action.turunFaTerimaPrintOut,
				turunFaApproveFps: action.turunFaApproveFps,
				turunFaAnalisa: action.turunFaAnalisa,
				turunFaTotal: action.turunFaTotal,
			};

		case SUBMIT_PPCR_FORM:
			return {
				...state,
				printOutTerimaPpcr: action.printOutTerimaPpcr,
				printOutApproveFps: action.printOutApproveFps,
				printOutAnalisa: action.printOutAnalisa,
				printOutTotal: action.printOutTotal,
				turunFaToPpcr: action.turunFaToPpcr,
				ppcrToBarangDatang: action.ppcrToBarangDatang,
				grandTotal: action.grandTotal,
			};

		case RESET_PPCR:
			return {
				project: '',
				terimaFaToTurunFa: '',
				turunFaTerimaPrintOut: '',
				turunFaApproveFps: '',
				turunFaAnalisa: '',
				turunFaTotal: '',
				printOutTerimaPpcr: '',
				printOutApproveFps: '',
				printOutAnalisa: '',
				printOutTotal: '',
				turunFaToPpcr: '',
				ppcrToBarangDatang: '',
				grandTotal: '',
			};

		default:
			return state;
	}
};

export default ppcrReducer;
