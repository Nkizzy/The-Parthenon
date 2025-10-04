// Balance History Test Script
// Run this in the browser console on http://localhost:8002/home.html

console.log('🧪 Starting Balance History Test Suite...');

// Test 1: Check if functions are available
console.log('📋 Checking available functions...');
console.log('refreshBalanceHistory:', typeof window.refreshBalanceHistory);
console.log('testBalanceHistory:', typeof window.testBalanceHistory);
console.log('showBalanceHistory:', typeof window.showBalanceHistory);

// Test 2: Clear cache
console.log('🧹 Clearing balance history cache...');
if (typeof window.refreshBalanceHistory === 'function') {
    window.refreshBalanceHistory();
    console.log('✅ Cache cleared');
} else {
    console.log('❌ refreshBalanceHistory function not found');
}

// Test 3: Add test data
console.log('💰 Adding test balance data...');
if (typeof window.testBalanceHistory === 'function') {
    window.testBalanceHistory().then(() => {
        console.log('✅ Test data added');
        
        // Test 4: Wait a moment then test graph display
        setTimeout(() => {
            console.log('📊 Testing graph display...');
            console.log('Hover over a player in the leaderboard to see the balance history graph');
            console.log('Check the console for detailed debugging information');
        }, 2000);
    });
} else {
    console.log('❌ testBalanceHistory function not found');
}

console.log('🎯 Test suite completed. Check the console output above for results.');
