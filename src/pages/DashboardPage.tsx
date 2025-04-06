
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, BarChart3, ShoppingBag, Users, LogOut } from 'lucide-react';

const DashboardPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-inventory-background">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Package className="h-6 w-6 text-inventory-primary" />
            <span className="text-xl font-bold text-inventory-primary">InventoryPro</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Welcome, {user?.username}</span>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleLogout}
              className="flex items-center space-x-1"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Total Items</CardTitle>
              <Package className="h-4 w-4 text-inventory-muted" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">246</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
              <BarChart3 className="h-4 w-4 text-inventory-muted" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">+2 since yesterday</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Suppliers</CardTitle>
              <Users className="h-4 w-4 text-inventory-muted" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+1 new this week</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Recent Items */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Recent Inventory Items</CardTitle>
            <CardDescription>The latest items added to your inventory</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Wireless Keyboard</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Electronics</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">45</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$49.99</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Office Chair</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Furniture</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$199.99</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Notebook Bundle</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Stationery</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">120</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$12.50</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">External Hard Drive</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Electronics</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">18</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$89.99</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Desk Lamp</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Lighting</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">32</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$24.99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common inventory tasks</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col space-y-2">
              <Button className="bg-inventory-primary hover:bg-inventory-secondary justify-start">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Add New Item
              </Button>
              <Button variant="outline" className="justify-start">
                <Package className="mr-2 h-4 w-4" />
                Generate Inventory Report
              </Button>
              <Button variant="outline" className="justify-start">
                <Users className="mr-2 h-4 w-4" />
                Manage Suppliers
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Low Stock Alert</CardTitle>
              <CardDescription>Items that need to be restocked soon</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="p-2 bg-red-50 rounded-md flex justify-between">
                  <span className="font-medium">Wireless Mouse</span>
                  <span className="text-red-600 font-medium">2 left</span>
                </li>
                <li className="p-2 bg-orange-50 rounded-md flex justify-between">
                  <span className="font-medium">USB-C Cables</span>
                  <span className="text-orange-600 font-medium">5 left</span>
                </li>
                <li className="p-2 bg-orange-50 rounded-md flex justify-between">
                  <span className="font-medium">Paper Clips (Box)</span>
                  <span className="text-orange-600 font-medium">3 left</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
