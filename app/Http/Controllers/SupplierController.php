<?php

namespace App\Http\Controllers;

use App\Supplier;
use Illuminate\Http\Request;

class SupplierController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of suppliers.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $suppliers = Supplier::all();
        return view('supplier.index', compact('suppliers'));
    }

    /**
     * Show the form for creating a new supplier.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('supplier.create');
    }

    /**
     * Store a newly created supplier in the database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate the request
        $request->validate([
            'name' => 'required|min:3|unique:suppliers|regex:/^[a-zA-Z ]+$/',
            'address' => 'required|min:3',
            'mobile' => 'required|digits:11',
            'details' => 'required|min:3',
            'previous_balance' => 'nullable|numeric|min:0',
        ]);

        // Log the incoming data for debugging
        \Log::info('Store Supplier Request:', $request->all());

        // Create and save the supplier
        $supplier = new Supplier();
        $supplier->name = $request->name;
        $supplier->address = $request->address;
        $supplier->mobile = $request->mobile;
        $supplier->details = $request->details;
        $supplier->previous_balance = $request->previous_balance ?? 0; // Default to 0 if not provided
        $supplier->save();

        return redirect()->back()->with('message', 'New supplier has been added successfully!');
    }

    /**
     * Show the form for editing the specified supplier.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $supplier = Supplier::findOrFail($id);
        return view('supplier.edit', compact('supplier'));
    }

    /**
     * Update the specified supplier in the database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Validate the request
        $request->validate([
            'name' => 'required|min:3|regex:/^[a-zA-Z ]+$/',
            'address' => 'required|min:3',
            'mobile' => 'required|digits:11',
            'details' => 'required|min:3',
            'previous_balance' => 'nullable|numeric|min:0',
        ]);

        // Log the update data for debugging
        \Log::info('Update Supplier Request:', $request->all());

        // Find the supplier and update it
        $supplier = Supplier::findOrFail($id);
        $supplier->name = $request->name;
        $supplier->address = $request->address;
        $supplier->mobile = $request->mobile;
        $supplier->details = $request->details;
        $supplier->previous_balance = $request->previous_balance ?? $supplier->previous_balance;
        $supplier->save();

        return redirect()->back()->with('message', 'Supplier updated successfully!');
    }

    /**
     * Remove the specified supplier from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $supplier = Supplier::findOrFail($id);
        $supplier->delete();
        return redirect()->back()->with('message', 'Supplier deleted successfully!');
    }
}
