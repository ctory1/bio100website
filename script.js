function showInfo(phase) {
    const infoDiv = document.getElementById('phase-info');
    let info = '';

    switch(phase) {
        case 'g1':
            info = 'G1 Phase (First Gap): The cell grows and prepares for DNA replication. Organelles duplicate and the cell checks for favorable conditions.';
            break;
        case 's':
            info = 'S Phase (Synthesis): DNA replication occurs, creating identical copies of each chromosome. This is crucial for genetic continuity.';
            break;
        case 'g2':
            info = 'G2 Phase (Second Gap): The cell continues to grow and prepares for division. It checks DNA replication accuracy and repairs errors.';
            break;
        case 'm':
            info = 'M Phase (Mitosis): Actual cell division occurs through prophase, metaphase, anaphase, and telophase, followed by cytokinesis.';
            break;
    }

    infoDiv.innerHTML = `<p>${info}</p>`;
}

function showAbnormalInfo(phase) {
    const infoDiv = document.getElementById('phase-info');
    let info = '';

    switch(phase) {
        case 'g1':
            info = 'G1 Checkpoint Failure: Damaged DNA isn\'t repaired properly, allowing cells with mutations to proceed to replication, potentially leading to tumors.';
            break;
        case 's':
            info = 'S Phase Errors: Mistakes in DNA replication, like pRb gene mutations, can disrupt E2F regulation.';
            break;
        case 'g2':
            info = 'G2 Checkpoint Failure: Unrepaired DNA damage slips through, allowing cells to enter mitosis with errors that could cause chromosomal abnormalities.';
            break;
        case 'm':
            info = 'M Phase Disruption: Abnormal spindle formation or chromosome segregation can lead to unequal DNA distribution, potentially causing cell death or cancer.';
            break;
    }

    infoDiv.innerHTML = `<p>${info}</p>`;
}
