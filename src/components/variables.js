export const ENV = [
    { value: 'Select', label: 'Select a ENV Type' },
    { value: 'MO', label: 'MO' },
    { value: 'UAT', label: 'UAT' },
    { value: 'PERF', label: 'PERF' },
    { value: 'STG', label: 'STG' },
    { value: 'PROD', label: 'PROD' }
];

export const programType = [
    { value: 'Select,', label: 'Select a Program Type,' },
    { value: 'MSTD,', label: 'MSTD,' },
    { value: 'MSTD,', label: 'MSTD,' },
    { value: 'MFAS,', label: 'MFAS' },
    { value: 'CRPLS,', label: 'CRPLS' },
    { value: 'MSTDA,', label: 'MSTDA' },
    { value: 'MFASA,', label: 'MFASA' },
    { value: 'CRPLA,', label: 'CRPLA' },
    { value: 'PCCP,', label: 'PCCP' },
    { value: 'CPPCC,', label: 'CPPCC' },
    { value: 'ACOB,', label: 'ACOB' },
    { value: 'PCCB', label: 'PCCB'},
    { value: 'CPCCB', label: 'PCCB'},
    { value: 'BH', label: 'BH'},
    { value: 'CPBH', label: 'CPBH'},
    { value: 'SCO', label: 'SCO'},
    { value: 'PACE', label: 'PACE'},
    { value: 'ICO', label: 'ICO'},
    { value: 'DNTL1', label: 'DNTL1'},
    { value: 'DNTL2', label: 'DNTL2'},
    { value: 'DNTL3', label: 'DNTL3'},
    { value: 'CBHI1', label: 'CBHI1'},
    { value: 'CBHI2', label: 'CBHI2'},
    { value: 'ACCS1', label: 'ACCS1'},
    { value: 'ACCS2', label: 'ACCS2'},
    { value: 'PACC1', label: 'PACC1'},
    { value: 'PACC2', label: 'PACC2'},
    { value: 'LTSS', label: 'LTSS'},
    { value: 'CSA', label: 'CSA'},
    { value: 'BHCP', label: 'BHCP'},
    { value: 'ELTSS', label: 'ELTSS'},
    { value: 'HSPC', label: 'HSPC'},
    { value: 'HBRW', label: 'HBRW'},
    { value: 'MSKSC', label: 'MSKSC'},
];
export const transactionType = [
    { value: 'Select', label: 'Select a Transaction Type' },
    { value: 'E (Enrollment)', label: 'E (Enrollment)' },
    { value: 'T (Transfer)', label: 'T (Transfer)' },
    { value: 'D (Disenrollment)', label: 'D (Disenrollment)' },
    { value: 'C (Change)', label: 'C (Change)' },
    { value: 'H (History)', label: 'H (History)' }
];

export default {
    ENV,
    programType,
    transactionType
};
