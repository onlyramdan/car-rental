<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rental;
use App\Models\Car;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;

class RentalController extends Controller
{
    public function index()
    {
        $rentals = Rental::with(['user', 'car'])->get();
        return response()->json($rentals);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'car_id' => 'required|exists:cars,id',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $car = Car::find($request->car_id);

        if (!$car->available) {
            return response()->json(['error' => 'Car is not available'], 400);
        }

        $rental = Rental::create([
            'user_id' => auth()->id(),
            'car_id' => $request->car_id,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
        ]);

        $car->update(['available' => false]);

        return response()->json($rental, 201);
    }

    public function show($id)
    {
        $rental = Rental::with(['user', 'car'])->find($id);
        if (!$rental) {
            return response()->json(['error' => 'Rental not found'], 404);
        }
        return response()->json($rental);
    }

    public function destroy($id)
    {
        $rental = Rental::find($id);
        if (!$rental) {
            return response()->json(['error' => 'Rental not found'], 404);
        }

        $car = $rental->car;
        $car->update(['available' => true]);

        $rental->delete();

        return response()->json(['message' => 'Rental deleted successfully']);
    }
}
