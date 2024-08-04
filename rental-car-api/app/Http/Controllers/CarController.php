<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Car;
use Illuminate\Support\Facades\Validator;

class CarController extends Controller
{
    public function index()
    {
        $cars = Car::all();
        return response()->json($cars);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'brand' => 'required|string|max:255',
            'model' => 'required|string|max:255',
            'plate_number' => 'required|string|max:255|unique:cars',
            'rental_rate' => 'required|numeric',
            'available' => 'boolean',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $car = Car::create($request->all());

        return response()->json($car, 201);
    }

    public function show($id)
    {
        $car = Car::find($id);
        if (!$car) {
            return response()->json(['error' => 'Car not found'], 404);
        }
        return response()->json($car);
    }

    public function update(Request $request, $id)
    {
        $car = Car::find($id);
        if (!$car) {
            return response()->json(['error' => 'Car not found'], 404);
        }

        $car->update($request->all());

        return response()->json($car);
    }

    public function destroy($id)
    {
        $car = Car::find($id);
        if (!$car) {
            return response()->json(['error' => 'Car not found'], 404);
        }

        $car->delete();

        return response()->json(['message' => 'Car deleted successfully']);
    }
}
