let beneficiaries = [
  {
    id: 1,
    accountName: "Nonso Horizon",
    bank: "GTBank",
    bankLocation: "Lagos, Nigeria",
    accountNumber: "0123456789",
    currencyDisplay: "🇳🇬 NGN - Naira"
  },
  {
    id: 2,
    accountName: "Adekola Adeyemi",
    bank: "Barclays",
    bankLocation: "London, UK",
    accountNumber: "GB29BARC20031812345678",
    currencyDisplay: "🇬🇧 GBP - Pound Sterling"
  }
];

const addModal = document.getElementById('addModal');
const viewModal = document.getElementById('viewModal');
const form = document.getElementById('beneficiaryForm');
const tableBody = document.getElementById('tableBody');
const addBtn = document.getElementById('addBtn');

function renderTable() {
  tableBody.innerHTML = beneficiaries.map(b => `
    <tr>
      <td><strong>${b.accountName}</strong></td>
      <td>${b.currencyDisplay}</td>
      <td>
        <button class="action-btn" onclick="viewBeneficiary(${b.id})">View</button>
        <button class="action-btn delete-btn" onclick="deleteBeneficiary(${b.id})">Delete</button>
      </td>
    </tr>
  `).join('');
}

// Add Modal
function openAddModal() {
  form.reset();
  addModal.style.display = 'flex';
}

function closeAddModal() {
  addModal.style.display = 'none';
}

// View Modal
function viewBeneficiary(id) {
  const beneficiary = beneficiaries.find(b => b.id === id);
  if (!beneficiary) return;

  document.getElementById('viewDetails').innerHTML = `
    <p><strong>Account Name:</strong> ${beneficiary.accountName}</p>
    <p><strong>Bank:</strong> ${beneficiary.bank}</p>
    <p><strong>Bank Location:</strong> ${beneficiary.bankLocation}</p>
    <p><strong>Account Number:</strong> ${beneficiary.accountNumber}</p>
    <p><strong>Currency:</strong> ${beneficiary.currencyDisplay}</p>
  `;
  
  viewModal.style.display = 'flex';
}

function closeViewModal() {
  viewModal.style.display = 'none';
}

// Go Back Button Logic
function goBack() {
  if (addModal.style.display === 'flex') {
    closeAddModal();
  } else if (viewModal.style.display === 'flex') {
    closeViewModal();
  } else {
    alert("Going back to Home / Dashboard");
  }
}

// Form Submit
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const newBeneficiary = {
    id: Date.now(),
    accountName: document.getElementById('accountName').value.trim(),
    bank: document.getElementById('bank').value,
    bankLocation: document.getElementById('bankLocation').value.trim(),
    accountNumber: document.getElementById('accountNumber').value.trim(),
    currencyDisplay: document.getElementById('currency').selectedOptions[0].text
  };
  
  beneficiaries.unshift(newBeneficiary);
  renderTable();
  closeAddModal();
});

function deleteBeneficiary(id) {
  if (confirm('Are you sure you want to delete this beneficiary?')) {
    beneficiaries = beneficiaries.filter(b => b.id !== id);
    renderTable();
  }
}

// Initialize
addBtn.addEventListener('click', openAddModal);
renderTable();